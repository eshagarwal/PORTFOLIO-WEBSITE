import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactMarkdown from "react-markdown";
import { HiOutlineMinusSmall, HiOutlineXMark } from "react-icons/hi2";
import { PiArrowUpRightBold, PiSparkleFill } from "react-icons/pi";
import { CHATBOT_API_URL } from "../config/chatbot";
import "./styles/Chatbot.css";

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  text: string;
  pending?: boolean;
};

type ChatbotResponse = {
  response?: string;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      text: "Ask about Esha's work, or stack.",
    },
  ]);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    scroller.scrollTop = scroller.scrollHeight;
  }, [messages, isOpen]);

  // const endpointLabel = useMemo(() => {
  //   try {
  //     return new URL(CHATBOT_API_URL).host;
  //   } catch {
  //     return CHATBOT_API_URL;
  //   }
  // }, []);

  const sendMessage = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isSending) {
      return;
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: trimmedInput,
    };
    const pendingMessageId = `assistant-pending-${Date.now()}`;

    setInput("");
    setIsSending(true);
    setMessages((current) => [
      ...current,
      userMessage,
      {
        id: pendingMessageId,
        role: "assistant",
        text: "Thinking...",
        pending: true,
      },
    ]);

    try {
      const response = await fetch(CHATBOT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedInput,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data: ChatbotResponse = await response.json();
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        text:
          typeof data.response === "string" && data.response.trim()
            ? data.response
            : "The service returned without a usable response.",
      };

      setMessages((current) =>
        current.map((message) =>
          message.id === pendingMessageId ? assistantMessage : message,
        ),
      );
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "The request could not be completed.";

      setMessages((current) =>
        current.map((entry) =>
          entry.id === pendingMessageId
            ? {
                id: `assistant-error-${Date.now()}`,
                role: "assistant",
                text: `The chatbot is unavailable right now. ${message}`,
              }
            : entry,
        ),
      );
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendMessage();
  };

  const handleKeyDown = async (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      await sendMessage();
    }
  };

  return (
    <div className={`chatbot-shell ${isOpen ? "chatbot-shell-open" : ""}`}>
      <button
        type="button"
        className={`chatbot-toggle ${isOpen ? "chatbot-toggle-hidden" : ""}`}
        onClick={() => setIsOpen(true)}
        data-cursor="disable"
        aria-label="Open chatbot"
      >
        <span className="chatbot-toggle-icon" aria-hidden="true">
          <PiSparkleFill />
        </span>
        <span className="chatbot-toggle-copy">
          <strong>Ask Esha</strong>
        </span>
      </button>

      {isOpen && (
        <section className="chatbot-panel" aria-label="Chatbot">
          <header className="chatbot-panel-header">
            <div className="chatbot-panel-title">
              <span className="chatbot-panel-mark" aria-hidden="true">
                <PiSparkleFill />
              </span>
              <div>
                <strong>Ask Esha</strong>
              </div>
            </div>

            <div className="chatbot-panel-actions">
              <button
                type="button"
                className="chatbot-icon-button"
                onClick={() => setIsOpen(false)}
                data-cursor="disable"
                aria-label="Minimize chatbot"
              >
                <HiOutlineMinusSmall />
              </button>
              <button
                type="button"
                className="chatbot-icon-button"
                onClick={() => {
                  setIsOpen(false);
                  setMessages([
                    {
                      id: "welcome",
                      role: "assistant",
                      text: "Ask about Esha's work, stack, or availability.",
                    },
                  ]);
                }}
                data-cursor="disable"
                aria-label="Reset chatbot"
              >
                <HiOutlineXMark />
              </button>
            </div>
          </header>

          <div className="chatbot-thread" ref={scrollerRef}>
            {messages.map((message) => (
              <article
                key={message.id}
                className={`chatbot-message chatbot-message-${message.role} ${
                  message.pending ? "chatbot-message-pending" : ""
                }`}
              >
                <ReactMarkdown>{message.text}</ReactMarkdown>
              </article>
            ))}
          </div>

          <form className="chatbot-form" onSubmit={handleSubmit}>
            <label className="chatbot-input-wrap">
              <span className="chatbot-visually-hidden">Message</span>
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question..."
                rows={1}
                disabled={isSending}
                data-cursor="disable"
              />
            </label>

            <button
              type="submit"
              className="chatbot-submit"
              disabled={isSending || !input.trim()}
              data-cursor="disable"
              aria-label="Send message"
            >
              <PiArrowUpRightBold />
            </button>
          </form>
        </section>
      )}
    </div>
  );
};

export default Chatbot;

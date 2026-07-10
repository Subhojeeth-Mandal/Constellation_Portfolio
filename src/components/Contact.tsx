import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, User, MessageSquare, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import emailjs from "@emailjs/browser";
import { GlassCard } from "./ui/GlassCard";

const EMAILJS_SERVICE_ID = "service_4e4mbdk";
const EMAILJS_TEMPLATE_ID = "template_0ms3684";
const EMAILJS_PUBLIC_KEY = "oW2AYEzflHYCCuIzg";
const RECEIVER_EMAIL = "subhojeethmandal4432@gmail.com";

type FormState = { name: string; email: string; message: string };

const fields: {
  id: keyof FormState;
  label: string;
  icon: React.ElementType;
  type: string;
}[] = [
  {
    id: "name",
    label: "Name",
    icon: User,
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    icon: Mail,
    type: "email",
  },
];

export const Contact = () => {
  const [formState, setFormState] = useState<FormState>({ name: "", email: "", message: "" });

  const [focusedField, setFocusedField] = useState<keyof FormState | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formState.name.trim() ||
      !formState.email.trim() ||
      !formState.message.trim()
    ) {
      alert("Please fill all the fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
          to_email: RECEIVER_EMAIL,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 }, colors: ["#38BDF8", "#A855F7", "#22D3EE"] });

      setFormState({ name: "", email: "", message: "" });
      setIsSubmitted(true);

      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 px-6 py-24 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold lg:text-5xl">
            Establish Connection
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <GlassCard className="p-8">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-blue/10">
                    <CheckCircle2 size={32} className="text-accent-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Your message has been delivered
                  </h3>
                  <p className="max-w-sm text-sm text-slate-400">
                    Thanks for reaching out — I'll be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {fields.map((field) => {
                    const Icon = field.icon;

                    return (
                      <div
                        key={field.id}
                        className="relative"
                      >
                        <Icon
                          size={18}
                          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-500"
                        />

                        <input
                          id={field.id}
                          type={field.type}
                          value={formState[field.id]}
                          onChange={(e) =>
                            setFormState((prev) => ({
                              ...prev,
                              [field.id]: e.target.value,
                            }))
                          }
                          onFocus={() => setFocusedField(field.id)}
                          onBlur={() => setFocusedField(null)}
                          placeholder={field.label}
                          className={`w-full rounded-xl border bg-black/20 py-4 pl-12 pr-4 text-white placeholder-transparent transition-all duration-300 focus:scale-[1.02] focus:outline-none ${
                            focusedField === field.id
                              ? "border-accent-blue shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                              : "border-white/10"
                          }`}
                        />

                        <label
                          htmlFor={field.id}
                          className={`pointer-events-none absolute left-12 transition-all duration-300 ${
                            focusedField === field.id ||
                            formState[field.id]
                              ? "-top-2 bg-space-800 px-2 text-xs text-accent-blue"
                              : "top-4 text-sm text-slate-500"
                          }`}
                        >
                          {field.label}
                        </label>
                      </div>
                    );
                  })}

                  <div className="relative">
                    <MessageSquare
                      size={18}
                      className="absolute left-4 top-4 z-10 text-slate-500"
                    />

                    <textarea
                      id="message"
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Message"
                      className={`w-full rounded-xl border bg-black/20 py-4 pl-12 pr-4 text-white placeholder-transparent transition-all duration-300 focus:scale-[1.02] focus:outline-none ${
                        focusedField === "message"
                          ? "border-accent-blue shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                          : "border-white/10"
                      }`}
                    />

                    <label
                      htmlFor="message"
                      className={`pointer-events-none absolute left-12 transition-all duration-300 ${
                        focusedField === "message" ||
                        formState.message
                          ? "-top-2 bg-space-800 px-2 text-xs text-accent-blue"
                          : "top-4 text-sm text-slate-500"
                      }`}
                    >
                      Message
                    </label>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple py-4 font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Transmitting..." : "Transmit Signal"}
                    <Send size={18} />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </GlassCard>

          <div className="flex flex-col justify-center gap-8">
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              className="glass rounded-2xl border-l-4 border-accent-blue p-6"
            >
              <h3 className="mb-2 text-lg font-bold">
                Let's Engineer Something Exceptional
              </h3>

              <p className="text-sm text-slate-400">
                I'm always open to discussing scalable architecture, backend
                systems, or full-stack collaborations. If you have a technical
                challenge, a role, or a project in mind, drop a message below
                and I'll respond promptly.
              </p>
            </motion.div>

            <div className="glass space-y-6 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                  <Mail
                    size={18}
                    className="text-accent-blue"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Email
                  </p>

                  <a
                    href="mailto:subhojeethmandal4432@gmail.com"
                    className="text-sm text-white transition-colors hover:text-accent-blue"
                  >
                    subhojeethmandal4432@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                  <MapPin
                    size={18}
                    className="text-accent-purple"
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Location
                  </p>

                  <p className="text-sm text-white">
                    Hyderabad, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
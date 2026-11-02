import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function TagInput({ tags, onAddTag, onRemoveTag, placeholder = "Type and press Enter..." }) {
  const [input, setInput] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      const trimmed = input.trim();
      if (!tags.includes(trimmed)) {
        onAddTag(trimmed);
        setInput("");
      }
    }
  };

  const handleRemove = (tag) => {
    onRemoveTag(tag);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-[#e7dccd] bg-[#f5efe7] px-4 py-3 transition-colors focus-within:border-[#c7774b]">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="w-full bg-transparent text-[#1f1b18] placeholder-[#7b6b60] outline-none"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#f3d9c5] px-3 py-1 text-[#8b4e2a]"
          >
            <span className="text-sm font-medium">{tag}</span>
            <button
              onClick={() => handleRemove(tag)}
              className="transition hover:text-[#5d2d1e]"
              aria-label={`Remove ${tag}`}
            >
              <X size={16} />
            </button>
          </motion.div>
        ))}
      </div>

      {tags.length > 0 && (
        <p className="text-xs text-[#6b625b]">{tags.length} item(s) added</p>
      )}
    </div>
  );
}

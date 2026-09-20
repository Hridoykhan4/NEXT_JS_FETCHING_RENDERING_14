export default function Home() {
  return (
    <div className="p-8 space-y-6">
      {/* টাইটেলে Lora ফন্ট ব্যবহার */}
      <h1 className="font-lora text-4xl font-bold">
        This is a Heading with Lora Font
      </h1>

      {/* সাবটাইটেল বা বিশেষ টেক্সটে Space Grotesk ব্যবহার */}
      <h2 className="font-space text-2xl font-semibold tracking-wide text-blue-600">
        This is a Subheading with Space Grotesk
      </h2>

      {/* প্যারাগ্রাফে ডিফল্ট ফন্ট (Inter) কাজ করবে, অথবা আপনি চাইলে নির্দিষ্ট করে দিতে পারেন */}
      <p className="font-inter text-base text-gray-700 leading-relaxed">
        This is a regular paragraph text using Inter font. It looks extremely
        clean and professional for long reading contents.
      </p>
    </div>
  );
}

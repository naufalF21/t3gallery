import Link from "next/link";

const mockUrls = [
  "https://ostji9ue5p.ufs.sh/f/t6hkDIHlKIyaXBHaMCA6gFzZnHrAYPcL0Nxi8eX2sfy7b1SK",
  "https://ostji9ue5p.ufs.sh/f/t6hkDIHlKIyaYYIaxJsdBZSyEPmYaNC9xn4IgDL8w6Qo7cG0",
  "https://ostji9ue5p.ufs.sh/f/t6hkDIHlKIyaoe3ThLUK6iYvf9tka0xodFRG7e58uyCz4Xcj",
  "https://ostji9ue5p.ufs.sh/f/t6hkDIHlKIyarXHciLMBUOqtAD2opLsY36dEgIk1WwJ5em4v",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48 bg-white">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}

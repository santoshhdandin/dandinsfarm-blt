import { Instagram, Youtube, Facebook } from 'lucide-react';

export default function SocialLinks() {
  const socials = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@FarmingWithAIRaitha', label: 'YouTube' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <div className="flex items-center space-x-4">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-green-400 transition-colors"
          aria-label={social.label}
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  );
}

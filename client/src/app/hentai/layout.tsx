import { FC, ReactNode } from "react";

interface CartLayoutProps {
  children: ReactNode;
}

const HentaiLayout: FC<CartLayoutProps> = ({ children }) => {
  const srcUnConnect = [
    {
      name: "Jitaku Keibiin 1",
      src: "https://play.sonar-cdn.com/play/be9060bb-13d4-48eb-9fc1-e2b084ff6b8a",
    },
    {
      name: "Uchi no Otouto Maji de Dekain Dakedo Mi ni Konai? 2",
      src: "https://play.sonar-cdn.com/play/3fce8a75-b699-4f0a-ad4b-735f032e207d",
    },
    {
      name: "Sakusei Byoutou The Animation 4",
      src: "https://play.sonar-cdn.com/play/ff781f2e-c12f-49ca-8efa-fd2f4d9f3c3f",
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap gap-2">{children}</div>
      unlink:
      <div className="flex gap-6">
        {srcUnConnect.map((src, i) => (
          <a
            key={i}
            target="_blank"
            href={src.src}
            className="text-blue-600 z-50 font-bold"
          >
            {src.name}
          </a>
        ))}
      </div>
      current page: 14
    </div>
  );
};

export default HentaiLayout;

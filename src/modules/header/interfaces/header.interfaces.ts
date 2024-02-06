type url = {
  title: string;
  to: string;
}

export type HeaderProps = {
  items: url[];
  initialIndex: number;
  className?: string;
} 
import { Box } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import styles from "./die.module.css";

const Pip = () => <span className={styles.pip} />;

const Face = ({ children, cursor, onClick }: PropsWithChildren<{ cursor: "grab" | "not-allowed"; onClick?: () => void }>) => (
  <Box
    onClick={onClick}
    cursor={cursor}
    className={styles.face}
  >
    {children}
  </Box>
);

type Props = {
  value: number;
  onClick?: () => void;
  isClickable?: boolean;
};

export const Die = ({ value, onClick, isClickable }: Props) => {
  const pips = Number.isInteger(value)
    ? Array(value)
      .fill(0)
      .map(() => <Pip key={crypto.randomUUID()} />)
    : null;
  return (
    <Face
      onClick={onClick}
      cursor={value === 0 && isClickable ? "grab" : "not-allowed"}
    >
      {pips}
    </Face>
  );
};

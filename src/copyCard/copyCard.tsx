import { Card, Text } from "@mantine/core";
import classes from "./copyCard.module.css";
import { CopyCardProps } from "../interfaces";

export function CopyCard({ clipboard, icon, desc, color }: CopyCardProps) {
  return (
    <Card
      shadow="sm"
      padding="sm"
      onClick={() => clipboard.copy(icon)}
      className={classes.card}
    >
      <Card.Section
        className={classes.cardSection}
        style={{ backgroundColor: color }}
      >
        <Text mt="sm" ta="center" className={classes.icon}>
          {icon}
        </Text>
      </Card.Section>
      <Text mt="sm" c="dimmed" size="sm" ta="center">
        {desc}
      </Text>
    </Card>
  );
}

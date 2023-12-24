import { useClipboard } from "@mantine/hooks";
import { CopyCard } from "../copyCard/copyCard";
import classes from "./cards.module.css";
import { SimpleGrid } from "@mantine/core";
import { useContext, useEffect, useRef, useState } from "react";
import iconsList from "./cardsMetadata.json";
import { cardsListObject } from "../interfaces";
import { AppContext } from "../context";

export function Cards() {
  const clipboard = useClipboard({ timeout: 500 });
  const { filter } = useContext(AppContext);
  const [cols, setCols] = useState(getNumberCols());
  const icons = useRef<cardsListObject>(iconsList);
  const [filteredIcons, setFilteredIcons] = useState<string[]>(
    Object.keys(icons.current)
  );

  function getNumberCols(): number {
    return Math.floor(window.innerWidth / 16 / 7.8);
  }

  window.addEventListener("resize", () => {
    setCols(getNumberCols());
  });

  useEffect(() => {
    setFilteredIcons(
      Object.keys(icons.current).filter(
        (key) =>
          key.includes(filter) ||
          icons.current[key].desc.includes(filter) ||
          icons.current[key].keys.includes(filter)
      )
    );
  }, [filter]);

  return (
    <div className={classes.cardsWrapper}>
      <SimpleGrid spacing="sm" verticalSpacing="sm" cols={cols}>
        {filteredIcons.map((key) => (
          <CopyCard
            key={key}
            clipboard={clipboard}
            icon={icons.current[key].icon}
            desc={icons.current[key].desc}
            color={icons.current[key].color}
          ></CopyCard>
        ))}
      </SimpleGrid>
    </div>
  );
}

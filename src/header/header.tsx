import {
  Autocomplete,
  Button,
  Image,
  Kbd,
  Modal,
  Text,
  rem,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import classes from "./header.module.css";
import banner from "../assets/Banner.png";
import { useDisclosure } from "@mantine/hooks";
import { useContext } from "react";
import { AppContext } from "../context";

export function Header() {
  const [opened, modalHandlers] = useDisclosure(false);
  const { filter, setFilter } = useContext(AppContext);

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Image src={banner} className={classes.banner}></Image>
        <Autocomplete
          className={classes.search}
          placeholder="Search"
          leftSection={
            <IconSearch
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
          value={filter}
          onChange={setFilter}
          visibleFrom="xs"
        />
        <Modal
          opened={opened}
          onClose={modalHandlers.close}
          centered
          title="App Info"
          size="xl"
        >
          <Text fz="sm">
            This website provides users with a collection of icons that they can
            use as visual hints for their Git commits. Each icon is associated
            with a specific type of commit, giving a quick and visual
            representation of the commit's purpose.
          </Text>
          <br />
          <Text fz="sm">
            How to Use
            <ol>
              <li>
                <strong>Select an Icon:</strong> Browse through the available
                icons to find one that represents your Git commit.
              </li>
              <li>
                <strong>Copy to Clipboard:</strong> Click on the icon to copy it
                to your clipboard and paste the icon directly into your Git
                commit message or text editor. If you push <Kbd>ctrl</Kbd> while
                clicking the legend will be copied as well.
              </li>
              <li>
                <strong>Search for Icons:</strong> Use the search bar to find
                icons related to specific actions or themes and click on the
                search results to copy the selected icon.
              </li>
            </ol>
          </Text>
          <br />
          <Text fz="sm">
            Acknowledgments
            <ul>
              <li>
                Special thanks to <a href="https://mantine.dev/">Mantine UI</a>{" "}
                for providing UI components used in this project.
              </li>
              <li>
                Special thanks to <a href="https://gitmoji.dev/">GitMoji</a>.
                This website wants to be an updated version of it.
              </li>
              <li>
                Icons sourced from{" "}
                <a href="https://emojis.wiki/">Emoji Cheat Sheet</a>.
              </li>
              <li>
                Website Favicon sourced from{" "}
                <a
                  href="https://www.flaticon.com/free-icons/github"
                  title="github icons"
                >
                  Github icons created by Muhamad Ulum - Flaticon
                </a>
              </li>
            </ul>
          </Text>
        </Modal>
        <Button variant="light" color="gray" onClick={modalHandlers.open}>
          About
        </Button>
      </div>
    </header>
  );
}

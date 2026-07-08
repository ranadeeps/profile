import { Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme } from "../Themes";
import NavigateButton from "./NavigateButton";

export const Home = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Paper
        elevation={0}
        sx={{
          width: "auto",
          borderRadius: 0,
          fontFamily: "monospace",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          px: { xs: 1, sm: 0 },
        }}
      >
        <p className={"text-4xl mt-2"}>welcome to my digital space!</p>

        <div className="flex flex-col lg:flex-row gap-2 mb-1">
          <div className="w-full lg:w-1/2 flex flex-col gap-2">
            <p className="text-sm sm:text-xl lg:text-2xl text-justify">
              👋🏻 I'm ranadeep reddy, a backend developer. I build backend for
              fintech products.
            </p>
            <NavigateButton
              label="Let's connect"
              url="/connect"
              className="text-base sm:text-2xl lg:text-4xl sm:place-self-center"
            ></NavigateButton>
            {/* <div>
              <p className="text-3xl">Services:</p>
              <ul className="list-disc list-inside">
                <li className="text-xl">Web Development</li>
                <li className="text-xl">Backend Development</li>
                <li className="text-xl">Frontend UI</li>
                <li className="text-xl">Application Setup</li>
                <li className="text-xl">Database Development</li>
              </ul>
            </div> */}
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://ranadeepreddyshyamakura.info/mdms/pp_1.webp"
              className="rounded-2xl"
            ></img>
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
};

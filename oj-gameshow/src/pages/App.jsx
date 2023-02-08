import CardButton from "../components/CardButton";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

function App() {
  const questoes = [
    { id: 1, categoria: "TRIVIA" },
    { id: 2, categoria: "TRIVIA" },
    { id: 3, categoria: "TRIVIA" },
    { id: 4, categoria: "TRIVIA" },
    { id: 5, categoria: "TRIVIA" },
    { id: 6, categoria: "TRIVIA" },
    { id: 7, categoria: "TRIVIA" },
    { id: 8, categoria: "TRIVIA" },
    { id: 9, categoria: "TRIVIA" },
    { id: 10, categoria: "TRIVIA" },
    { id: 11, categoria: "TRIVIA" },
    { id: 12, categoria: "TRIVIA" },
    { id: 13, categoria: "TRIVIA" },
    { id: 14, categoria: "TRIVIA" },
    { id: 15, categoria: "TRIVIA" },
    { id: 16, categoria: "TRIVIA" },
    { id: 17, categoria: "TRIVIA" },
    { id: 18, categoria: "TRIVIA" },
    { id: 19, categoria: "TRIVIA" },
    { id: 20, categoria: "TRIVIA" },
    { id: 21, categoria: "TRIVIA" },
    { id: 22, categoria: "TRIVIA" },
    { id: 23, categoria: "TRIVIA" },
    { id: 24, categoria: "TRIVIA" },
  ];

  return (
    <Box sx={{ display: "flex", marginLeft: 5 }}>
      <Sidebar />
      <Box component="main">
        <h1 className="oj-game-title">100% OJ GAMESHOW</h1>
        <Grid
          spacing={4}
          container
          columns={{ xs: 8, sm: 8, md: 8 }}
          columnSpacing={2}
        >
          {questoes.map((questao) => {
            return (
              <Grid item md={1} key={questao.id}>
                <CardButton id={questao.id} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default App;

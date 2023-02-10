import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function ModalFilho(props) {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1100,
    bgcolor: "#f4a460",
    p: 4,
    borderRadius: "1rem",
    border: "0.5rem solid white",
  };
  const [open, setOpen] = useState(false);
  const [dicaOpen, setDicaOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setDicaOpen(false);
  };
  const handleDicaOpen = () => {
    setDicaOpen(true);
  };

  return (
    <>
      <button
        style={props.categoria == "HERÓI MUSICAL" ? { display: "none" } : null}
        className="oj-questao-botao"
        onClick={handleOpen}
      >
        Revelar Pergunta
      </button>
      <Modal hideBackdrop open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <h1 className="oj-questao-titulo">{props.categoria}</h1>
          <p
            style={props.categoria != "TRIVIA" ? { display: "none" } : null}
            className="oj-questao-pergunta"
          >
            {props.pergunta}
          </p>
          <p
            style={
              props.categoria == "TRIVIA" && dicaOpen
                ? null
                : { display: "none" }
            }
            className="oj-questao-pergunta"
          >
            {props.dica}
          </p>
          <img
            className="oj-questao-personagem"
            style={
              props.categoria === "TRIVIA"
                ? { display: "none" }
                : props.categoria === "EXPLORADOR DE MAPAS"
                ? { width: "40rem" }
                : null
            }
            src={!dicaOpen ? props.pergunta : props.dica}
          />
          <button
            style={dicaOpen ? { display: "none" } : null}
            className="oj-questao-botao"
            onClick={handleDicaOpen}
          >
            Revelar Dica
          </button>
          <button className="oj-questao-botao" onClick={handleClose}>
            Fechar Questao
          </button>
        </Box>
      </Modal>
    </>
  );
}

export default ModalFilho;

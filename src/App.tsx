import CircularProgress from "./components/circulateProgress";
import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  FormControl,
  Typography,
  Button,
  Box
} from "@material-ui/core";


export default function App() {
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(183);
  const [age, setAge] = useState(25);
  const [goal, setGoal] = useState("");
  const [active, setActive] = useState("");
  const [isCalculator, setIsCalculator] = useState(true);
  const [isBarProgress, setIsBarProgress] = useState(false);
  const [IsResult, setIsResult] = useState(false);

  const calculateTaxa = () => {
    if (gender === "male") {
      return (66 + 13.8 * weight + 5 * height - 6.8 * age).toFixed(2);
    } else {
      return (665 + 9.6 * weight + 1.8 * height - 4.7 * age).toFixed(2);
    }
  };

  const calculateIMC = () => {
    return ((weight / (height * height)) * 10000).toFixed(2);
  };

  const calculatePesoIdeal = () => {
    //PI = IMC desejado x (Altura x Altura)
    return ((23 * (height * height)) / 10000).toFixed(2);
  };
  const calculateTDEE = () => {
    //TMB = 10 * (peso) + 6.25 * (altura) – 5 * (idade) – 161
    //TDEE = TMB * nível de atividade física
    return ((10 * weight + 6.25 * height - 5 * age) * 1.375).toFixed(2);
  };

  if (isCalculator || isBarProgress) {
    const handleSubmit = (event: any) => {
      event.preventDefault();
      setIsCalculator(false);
      setIsBarProgress(true);
      console.log("bar", isBarProgress);
      console.log("resut", IsResult);
      setTimeout(() => (setIsBarProgress(false), setIsResult(true)), 5700);
    };

    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          <Typography
            style={{ display: "flex", justifyContent: "center" }}
            variant="h5"
            gutterBottom
          >
            Parabéns pelo investimento!
          </Typography>
          <Typography
            style={{ display: "flex", justifyContent: "center" }}
            variant="h4"
            gutterBottom
          >
            CALCULADORA TDEE + MACROS
          </Typography>
          <div>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                justifyContent: "center",
                background: "#f0f0f0",
                minHeight: "600px",
                minWidth: "300px"
              }}
            >
              {isCalculator && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column"
                    //minWidth: "70%"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "10px",
                      justifyContent: "center",
                      padding: "0px 30px"
                    }}
                  >
                    <div style={{ minWidth: "220px" }}>
                      <FormControl 
                      fullWidth
                      >
                        <TextField
                          variant="outlined"
                          value={gender }
                          onChange={(event) => setGender(event.target.value as any)}
                          select
                          label="Gênero"
                        >
                          <MenuItem value="male">Masculino</MenuItem>
                          <MenuItem value="female">Feminino</MenuItem>
                        </TextField>
                      </FormControl>
                    </div>

                    <div style={{ minWidth: "220px" }}>
                      <TextField
                        label="Peso (kg)"
                        type="number"
                        value={weight}
                        onChange={(event) => setWeight(event.target.value as any)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      marginBottom: "20px",
                      flexWrap: "wrap",
                      gap: "10px",
                      justifyContent: "center",
                      padding: "0px 30px"
                    }}
                  >
                    <div style={{ minWidth: "220px" }}>
                      <TextField
                        label="Altura (cm)"
                        type="number"
                        value={height}
                        onChange={(event) => setHeight(event.target.value as any)}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        //style={{ marginRight: "25px" }}
                      />
                    </div>

                    <div style={{ minWidth: "220px" }}>
                      <TextField
                        label="Idade"
                        type="number"
                        value={age}
                        onChange={(event) => setAge(event.target.value as any)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "20px",
                      flexWrap: "wrap",
                      gap: "10px",
                      justifyContent: "center",
                      padding: "0px 30px"
                    }}
                  >
                    <div style={{ minWidth: "220px" }}>
                      <FormControl
                        fullWidth
                        style={{ marginRight: "25px", marginBottom: "15px" }}
                        variant="outlined"
                      >
                        <TextField
                          variant="outlined"
                          value={goal}
                          onChange={(event) => setGoal(event.target.value)}
                          select
                          label="Objetivo"
                        >
                          <MenuItem value="masculino">Masculino</MenuItem>
                          <MenuItem value="feminino">Feminino</MenuItem>
                        </TextField>
                      </FormControl>
                    </div>

                    <div style={{ minWidth: "220px" }}>
                      <FormControl fullWidth variant="outlined">
                      <TextField
                          variant="outlined"
                          value={active}
                          onChange={(event) => setActive(event.target.value as any)}
                          select
                          label="Nível de Atividade Física"
                        >
        
                          <MenuItem value="Sedentário">Sedentário</MenuItem>
                          <MenuItem value="Levemente Ativo">
                            Levemente Ativo
                          </MenuItem>
                        </TextField>
                      </FormControl>
                    </div>
                    <Button
                      variant="contained"
                      style={{
                        marginTop: "15px",
                        width: "100%",
                        background: "#008c8c",
                        color: "#fff"
                      }}
                      onClick={handleSubmit}
                    >
                      Gerar Protocolo
                    </Button>
                  </div>
                </div>
              )}
              {isBarProgress && <CircularProgress />}
            </form>
          </div>
        </div>
      </>
    );
  }

  if (IsResult) {
    return (
      <>
        <Typography
          variant="h2"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center"
          }}
          gutterBottom
        >
          Dieta Flexível
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "#f0f0f0",
            minHeight: "300px",
            marginLeft: "10%",
            width: "80%"
          }}
        >
          <div style={{ marginLeft: "10%", width: "80%" }}>
            <Typography
              variant="h5"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px"
              }}
              gutterBottom
            >
              Você precisa de {calculateTDEE()} calorias para manter seu Peso
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "90%"
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginBottom: "20px",
                  flexWrap: "wrap",
                  gap: "10px",
                  justifyContent: "center"
                }}
              >
                <div style={{ minWidth: "80px" }}>
                  <TextField
                    label="Taxa Metabólica Basal"
                    type="number"
                    value={calculateTaxa()}
                    onChange={(event) => setHeight(event.target.value as any)}
                    variant="outlined"
                    margin="normal"
                    disabled={true}
                    fullWidth
                    //style={{ marginRight: "25px" }}
                  />
                </div>

                <div style={{ minWidth: "80px" }}>
                  <TextField
                    label="TDEE"
                    type="number"
                    value={calculateTDEE()}
                    onChange={(event) => setAge(event.target.value as any)}
                    disabled={true}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    //style={{ marginRight: "25px" }}
                  />
                </div>

                <div style={{ minWidth: "80px" }}>
                  <TextField
                    label="IMC"
                    type="number"
                    value={calculateIMC()}
                    onChange={(event) => setAge(event.target.value as any)}
                    disabled={true}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    //style={{ marginRight: "25px" }}
                  />
                </div>
                <div style={{ minWidth: "80px" }}>
                  <TextField
                    label="Peso Ideal"
                    type="number"
                    value={calculatePesoIdeal()}
                    onChange={(event) => setAge(event.target.value as any)}
                    disabled={true}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  marginBottom: "30px"
                }}
              >
                <Typography variant="h4" gutterBottom>
                  O seu resultado já está na área de membros!
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <></>
}
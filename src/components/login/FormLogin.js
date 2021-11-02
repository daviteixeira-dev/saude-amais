import {
  Container,
  TextField,
  Button,
  Typography,
  IconButton,
  Stack,
  Link,
  Checkbox,
  FormControlLabel,
} from "@mui/material/";
import { green } from "@mui/material/colors";
import { styled } from '@material-ui/styles';

const ColorButton = styled(Button)(({ theme }) => ({
  '&:hover': {
    Color: green[700],
  },
}));

function FormLogin({ setIsLogin }) {

  return (
    <Container fixed component="main" maxWidth="xs">
      <div className="mt-3 mt-md-5">
        <div className="text-center">
          <Typography
            className="font-weight-normal"
            component="h1"
            variant="h4"
            sx={{ marginBottom: 5 }}
          >Faça seu login no Saúde+
          </Typography>
        </div>

              <Stack spacing={2} direction="row" sx={{marginBottom: 3}}>
                <Button
                  variant="outlined"
                  startIcon={<i className="fab fa-google"></i>}
                > Entrar com o Google
                </Button>
                <IconButton>
                  <i className="fab fa-facebook-f"></i>
                </IconButton>
                <IconButton>
                  <i className="fab fa-apple"></i>
                </IconButton>
                <IconButton>
                  <i className="fab fa-microsoft"></i>
                </IconButton>
              </Stack>


              <Typography variant="body2" color="textSecondary" component="p" align="center"> Entre também com seu email </Typography>

              <div className="mt-2">
                <TextField
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  />

          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Senha"
            name="password"
            type="password"
          />

                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Lembrar-me" />
                    <Link href="#" color="inherit" underline="none" align="center">
                      Esqueceu sua senha?
                    </Link>
                  </Stack>


          <Button
            type="button"
            variant="contained"
            fullWidth
            color="primary"
            size="large"
            className="mb-3 mb-mb-4 mt-4"
          > Entrar
          </Button>

          <Typography
            variant="body2"
            color="textSecondary"
            align="center"> Ainda não tem uma conta?
          </Typography>

          <ColorButton
            onClick={() => setIsLogin(false)}
            type="button"
            fullWidth
            size="large"
            variant="outlined"
            className="mt-md-4"
          >
            Cadastre-se
          </ColorButton>
        </div>
      </div>
    </Container>
  )
}

export default FormLogin;
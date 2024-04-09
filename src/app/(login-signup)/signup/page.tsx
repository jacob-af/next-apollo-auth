"use client";

import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useMutation, FetchResult } from "@apollo/client";
import { Copyright } from "../../SharedComponents/Copyright";
import { SIGNUP } from "@/app/graphql/mutations/auth";
import { signIn } from "next-auth/react";
import { AuthPayload } from "@/__generated__/graphql";
import { useRouter } from "next/navigation";

//const defaultTheme = createTheme();

type Inputs = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUpSide() {
  const [newUser, feedback] = useMutation(SIGNUP);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();
  console.log(errors, "errorss");
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async ({
    email,
    userName,
    password,
    confirmPassword
  }) => {
    console.log("ding");
    console.log(email, userName, password, confirmPassword);
    const { data: data }: FetchResult<AuthPayload> = await newUser({
      variables: {
        createUserInput: {
          email,
          password,
          userName
        }
      }
    });
    console.log(data, "data");
    const res = await signIn("credentials", {
      email: email,
      password,
      redirect: false
    });
    console.log(res);
    router.push("/dashboard");
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundColor: t =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="User Name"
              {...register("userName", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9_-]{3,32}$/,
                  message: "Invalid email address"
                }
              })}
              error={!!errors?.userName}
              helperText={errors?.userName ? errors.userName.message : null}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              {...register("email", {
                required: "Required field",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              error={!!errors?.email}
              helperText={errors?.email ? errors.email.message : null}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              {...register("password", {
                required: true,
                maxLength: 64,
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,32}$/,
                  message: "Password must be extra fancy"
                }
              })}
              error={!!errors?.password}
              helperText={errors?.password ? errors.password.message : null}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,32}$/,
                  message: "Passwords must match"
                },
                validate: (value, formValues) => {
                  console.log(value, formValues.password);
                  return formValues.password === formValues.confirmPassword;
                }
              })}
              error={!!errors?.confirmPassword}
              helperText={
                errors?.confirmPassword ? errors?.confirmPassword.message : null
              }
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="login" variant="body2">
                  {"Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>

            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
    //</ThemeProvider>
  );
}

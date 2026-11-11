"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Grid from "@mui/material/Grid";
import { Button, Container, FormControlLabel, Switch } from "@mui/material";

import { Input } from "@/components/Input";
import type { GeneratorConfigProps } from "@/utils/EquationsGenerator/schema";
import { equationGeneratorConfigSchema } from "@/utils/EquationsGenerator/schema";
import { useMathStore } from "@/store";

export const ConfigurationForm = () => {
  const { config, setConfig } = useMathStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GeneratorConfigProps>({
    defaultValues: config,
    resolver: zodResolver(equationGeneratorConfigSchema),
  });

  const onSubmit = handleSubmit((data) => {
    setConfig(data);
  });

  return (
    <Container fixed sx={{ my: 4 }}>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Input
              type="text"
              label="Liczba Równań"
              {...register("equationsAmount", { valueAsNumber: true })}
              error={Boolean(errors.equationsAmount)}
              helperText={errors.equationsAmount?.message}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              type="text"
              label="Maksymalna wartość parametru"
              {...register("maxParameterValue", { valueAsNumber: true })}
              error={Boolean(errors.maxParameterValue)}
              helperText={errors.maxParameterValue?.message}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              type="text"
              label="Ilość Parametrów"
              {...register("parametersAmount", { valueAsNumber: true })}
              error={Boolean(errors.parametersAmount)}
              helperText={errors.parametersAmount?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Switch {...register("isParametersAmountStrict")} />}
              label="Stała liczba parametrów"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="outlined" fullWidth>
              Zatwierdź
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

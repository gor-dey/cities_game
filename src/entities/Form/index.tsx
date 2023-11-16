import { useForm, SubmitHandler } from "react-hook-form";
import { Button, useStore } from "@shared";
import { observer } from "mobx-react-lite";

type Inputs = {
  inputText: string;
};

export const Form = observer(() => {
  const store = useStore();
  const { setNewCity } = store.CityStore;

  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setNewCity({ name: data.inputText.trim(), isYourAnswer: true });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-12 w-auto rounded px-4 bg-slate-100 flex justify-between items-center"
    >
      <input
        {...register("inputText")}
        required={true}
        placeholder="Напишите любой город, например: Где вы живете?"
        className="bg-slate-100 outline-none w-full"
      />
      <Button img="/images/icon.svg" />
    </form>
  );
});

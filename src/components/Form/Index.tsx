interface iFormProps {
  children: React.ReactNode;
  submit?: React.FormEventHandler<HTMLFormElement>;
}

export const Form = ({ submit, children }: iFormProps) => {
  return <form onSubmit={submit}>{children}</form>;
};

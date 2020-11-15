import React, { useState } from "react";

export const Form: React.FC = () => {
  const [email, changeEmail] = useState("");
  const [pass, changePassword] = useState("");

  const [formKey, setFormKey] = useState(false);
  const [mailKey, setMailKey] = useState(false);
  const [passKey, setPassKey] = useState(false);

  const formKeyString = `form-${formKey}`;
  const mailKeyString = `mail-${mailKey}`;
  const passKeyString = `pass-${passKey}`;

  const changeFormKey = () => setFormKey((prev) => !prev);
  const changeMailKey = () => setMailKey((prev) => !prev);
  const changePassKey = () => setPassKey((prev) => !prev);

  return (
    <div key={formKeyString}>
      <div>
        <label htmlFor="email">email</label>
        {": "}
        <input
          key={mailKeyString}
          type="email"
          id="email"
          placeholder="example@example.com"
          onChange={(e) => changeEmail(e.target.value)}
        />
        {email}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        {": "}
        <input
          key={passKeyString}
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) => changePassword(e.target.value)}
        />
        {pass}
      </div>
      <button onClick={changeFormKey}>form</button>
      <button onClick={changeMailKey}>mail</button>
      <button onClick={changePassKey}>pass</button>
    </div>
  );
};

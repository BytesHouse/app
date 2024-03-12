import React from 'react';
import './App.css';
import { useTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";

function App() {
  const { t } = useTranslation();
    const count = useSelector((state: RootState) => state.first.value)
    const dispatch = useDispatch()
  return (
    <div className="text-[42px]">
      <p>{t("welcome_msg")}</p>
    </div>
  );
}

export default App;

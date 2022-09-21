import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { IColor, ITabs } from "../interfaces";
import * as TABS from "../constants/tabs";
import colors from "../themes/colors";

export type TabSelectionType = {
  activeTab: ITabs;
  color: IColor;
  activateTab: (arg: ITabs) => void;
};

export const TabSelectionContext = createContext<TabSelectionType | null>(null);

const TabSelectionProvider: FC<ReactNode> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<ITabs>(TABS.ACTIVE_CASES);
  const [color, setColor] = useState<IColor>({} as IColor);

  useEffect(() => {
    setColor(colors[activeTab]);
  }, [activeTab]);

  const activateTab = (arg: ITabs) => {
    console.log(arg);
    setActiveTab(arg);
  };

  return (
    <TabSelectionContext.Provider value={{ activateTab, color, activeTab }}>
      {children}
    </TabSelectionContext.Provider>
  );
};

export default TabSelectionProvider;

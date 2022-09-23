import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { IColor, IScale, ITabs } from "../interfaces";
import * as TABS from "../constants/tabs";
import colors from "../themes/colors";
import scales from "../constants/scale";
import legends from "../constants/legends";

export type TabSelectionType = {
  activeTab: ITabs;
  color: IColor;
  activateTab: (arg: ITabs) => void;
  scale: IScale[];
  legend: { [key: number]: string };
};

export const TabSelectionContext = createContext<TabSelectionType | null>(null);

const TabSelectionProvider: FC<ReactNode> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<ITabs>(TABS.ACTIVE_CASES);
  const [color, setColor] = useState<IColor>({} as IColor);
  const [scale, setScale] = useState<IScale[]>({} as IScale[]);
  const [legend, setLegend] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    setColor(colors[activeTab]);
    setScale(scales[activeTab]);
    setLegend(legends[activeTab]);
  }, [activeTab]);

  const activateTab = (arg: ITabs) => {
    setActiveTab(arg);
  };

  return (
    <TabSelectionContext.Provider
      value={{ activateTab, color, activeTab, scale, legend }}
    >
      {children}
    </TabSelectionContext.Provider>
  );
};

export default TabSelectionProvider;

import { LangSwitcher } from "features/LangSwitcher";
import { FC, useState } from "react";
import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button/Button";

import { ArrowBarLeft, ArrowBarRight } from "react-bootstrap-icons";
import cls from "./sideBar.module.scss";

interface IProps {
  className?: string;
}

export const SideBar: FC<IProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const { className } = props;

  const sideBarToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
      className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button onClick={sideBarToggle} className="invertedColor">
        toggle
        {collapsed ? <ArrowBarLeft /> : <ArrowBarRight />}
        <i className="bi-alarm"></i>
      </Button>
      <div className={cls.swithers}>
        <LangSwitcher className="invertedColor" />
      </div>
    </aside>
  );
};

import { useEffect, useState } from "react";
import InfoMenuComponent, { InfoMenuComponentProps } from "./InfoMenuComponent";
import axios from "axios";
import InfoMoreViewBtn from "../../atom/InfoMoreViewBtn";
import { INFO_MENU } from "../../../Urls/URLList";

export type InfoMenuListProps = {
  store_id: number;
};

const InfoMenuList = ({ store_id }: InfoMenuListProps) => {
  const [infoMenuList, setInfoMenuList] = useState<InfoMenuComponentProps[]>(
    []
  );
  const [visibleList, setVisibleList] = useState<number>(3);
  const [isExpanded, setIsExpanded] = useState<boolean>(false); //확장되었는지 판단

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(INFO_MENU(store_id));
        const data = response.data.map((item: any) => ({
          ...item,
          kitIngredient: item.kitIngredient
            ? item.kitIngredient.split(", ")
            : [], // kitIngredient가 null이면 빈 배열로 처리
          kitAllergies: item.kitAllergies ? item.kitAllergies.split(", ") : [], // kitAllergies가 null이면 빈 배열로 처리
        }));
        console.log("메뉴데이터:", data);
        setInfoMenuList(data);
      } catch (error) {
        console.error("Error fetching menu data", error);
      }
    };

    fetchMenu();
  }, [store_id]);

  const handleView = async () => {
    setIsExpanded(!isExpanded);
    setVisibleList(isExpanded ? 3 : infoMenuList.length);
  };

  //0801 수정 - 내일 의견 듣고 이걸로 진행할 경우 코드 정리
  return (
    <div className="max-w-768 w-full my-0 mx-auto">
      <div className="max-w-768 w-full my-0 mx-auto h-px1040 overflow-scroll flex flex-col gap-px20">
        {infoMenuList.map((data, index: number) => (
          <InfoMenuComponent key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default InfoMenuList;

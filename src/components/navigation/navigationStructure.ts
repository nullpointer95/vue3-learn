import {ShowTypeEnum} from "@/components/navigation/navigationEnum";
import {NameEnum} from "@/views/mainpage/init/InitBottomNavigationData";

export interface BarButton {
    name: NameEnum
    showName: string
    showType: ShowTypeEnum
    clickFunction():void
}
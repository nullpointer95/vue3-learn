import {ShowTypeEnum} from "@/components/navigation/navigationEnum"
import {BarButton} from "@/components/navigation/navigationStructure";

export enum NameEnum {
    BUTTON1,
    BUTTON2
}

const buttonData:Array<BarButton> = [
    {
        name: NameEnum.BUTTON1,
        showName:"按钮1",
        clickFunction: () => {
            console.log("Btn pushed");
        },
        showType: ShowTypeEnum.normal
    }, {
        name:  NameEnum.BUTTON2,
        showName: "按钮2",
        clickFunction: () => {
            console.log("Btn pushed");
        },
        showType: ShowTypeEnum.normal
    }
];

function changeButtonStyle(button: NameEnum, type: ShowTypeEnum): void {
    buttonData[0].showName += "1"
    // for (const currBtn of buttonData) {
    //     if (currBtn.name === button) {
    //         currBtn.showType = type;
    //         break;
    //     }
    // }
}
export default function () {
    return {
        data:{
            buttonData
        },
        methods: {
            changeButtonStyle
        }
    }
}
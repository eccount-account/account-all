import "./css/reset.css";
import "./css/navigation.css";
import { fetchData } from "./api";

const IncomeAllEl = document.querySelector(".IncomeAll") as HTMLSelectElement;

function allIncomDate() {
    console.log("콘솔");
}

async function dataGet() {
    const selectIncomeAll = await fetchData("/api/income/");
    console.log("수입 전체 데이터 가져오기", selectIncomeAll);
    const selectIncomOne = await fetchData("/api/income/id/1");
    console.log("수입 특정 아이디 한개 데이터 가져오기", selectIncomOne);
    const year = 2022;
    const selectIncomYear = await fetchData(`/api/income/payyear/${year}`);
    console.log("수입 특정 년 가져오기", selectIncomYear);
    const month = 10;
    const selectIncomMonth = await fetchData(`/api/income/paymonth/${month}`);
    console.log("수입 특정 월 가져오기", selectIncomMonth);
    const day = 19;
    const selectIncomDay = await fetchData(`/api/income/payday/${day}`);
    console.log("수입 특정 일 가져오기", selectIncomDay);
    const selectExpendAll = await fetchData("/api/expend");
    console.log("수출 전체 데이터 가져오기", selectExpendAll);
    const exId = 1;
    const selectExpendOne = await fetchData(`/api/expend/id/${exId}`);
    console.log("수출 특정 아이디 한개 데이터 가져오기", selectExpendOne);
    const exYear = 2022;
    const selectExpendYear = await fetchData(`/api/expend/payyear/${exYear}`);
    console.log("수출 특정 년 가져오기", selectExpendYear);
    const exMonth = 12;
    const selectExpendMonth = await fetchData(`/api/paymonth/${exMonth}`);
    console.log("수출 특정 월 가져오기", selectExpendMonth);
    const exDay = 25;
    const selectExpendDay = await fetchData(`/api/expend/payday/${exDay}`);
    console.log("수출 특정 월 가져오기", selectExpendDay);
}

dataGet();

IncomeAllEl?.addEventListener("click", allIncomDate);

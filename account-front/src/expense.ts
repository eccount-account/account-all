import "./css/reset.css";
import "./css/navigation.css";

console.log("지출");

interface PostOption {
    method: string;
    headers: object | any;
    body: string;
}

async function saveInputData(
    payedMoney: number,
    payment: string,
    category: string,
    memo: string,
    year: number,
    month: number,
    day: number
) {
    const bodyData = JSON.stringify({
        content: {
            payedMoney: payedMoney,
            payment: payment,
            category: category,
            memoEl: memo,
            year: year,
            month: month,
            day: day,
        },
    });

    const requstOption: PostOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: bodyData,
    };

    const response = await fetch("/api/expend", requstOption);
    console.log(response);
}

const submitBtnEl = document.querySelector(".submitBtn");

function submitInputData(): any {
    console.log("클릭2222");
    const paymentEl = document.querySelector(
        "input[name='payment']:checked"
    ) as HTMLSelectElement; //스트링

    const payedMoneyEl = document.querySelector(
        ".payedMoney"
    ) as HTMLSelectElement; //숫자

    const payedDateEl = document.querySelector(
        "input[type='date']"
    ) as HTMLSelectElement;

    const categoryEl = document.querySelector(".category") as HTMLSelectElement;
    const memoEl = document.querySelector(".payedMemo") as HTMLSelectElement;

    const [year, month, day] = payedDateEl.value.split("-"); //숫자

    console.log(paymentEl);
    console.log(payedMoneyEl);
    console.log(payedDateEl);
    console.log(categoryEl);

    saveInputData(
        Number(payedMoneyEl.value),
        paymentEl.value,
        categoryEl.options[categoryEl.selectedIndex].value,
        memoEl.value,
        Number(year),
        Number(month),
        Number(day)
    );
}

import "./css/reset.css";
import "./css/navigation.css";

interface PostOption {
    method: string;
    headers: object | any;
    body: string;
}

async function saveInputData(
    payedMoney: number,
    category: string,
    memo: string,
    payYear: number,
    payMonth: number,
    payDay: number
) {
    const bodyData = JSON.stringify({
        content: {
            payedMoney: payedMoney,
            category: category,
            memo: memo,
            payYear: payYear,
            payMonth: payMonth,
            payDay: payDay,
        },
    });

    const requstOption: PostOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: bodyData,
    };

    const response = await fetch("/api/income", requstOption);
    console.log(response);
}

const submitBtnEl = document.querySelector(".submitBtn");

function submitInputData(): any {
    const payedCategoryEl = document.querySelector(
        ".payedCategory"
    ) as HTMLSelectElement;
    const payedMoneyEl = document.querySelector(
        ".payedMoney"
    ) as HTMLSelectElement;
    const payedDateEl = document.querySelector(
        "input[type='date']"
    ) as HTMLSelectElement;
    const memoEl = document.querySelector(".payedMemo") as HTMLSelectElement;

    console.log(
        "방법",
        payedCategoryEl.options[payedCategoryEl.selectedIndex].value
    );
    console.log("수입", payedMoneyEl.value);
    console.log("데이트", payedDateEl.value);
    console.log("메모", memoEl.value);

    const [year, month, day] = payedDateEl.value.split("-");

    saveInputData(
        Number(payedMoneyEl.value),
        payedCategoryEl.options[payedCategoryEl.selectedIndex].value,
        memoEl.value,
        Number(year),
        Number(month),
        Number(day)
    );
}

submitBtnEl?.addEventListener("click", submitInputData);

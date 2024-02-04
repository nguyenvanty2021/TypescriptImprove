import "./App.css";

function App() {
  interface A {
    name: string;
  }
  interface B {
    age: number;
  }
  type Item = A & B;
  interface Product extends A, B {}
  const objectInformationProduct: Product = {
    name: "Ty3",
    age: 13,
  };
  const objectInformationItem: Item = {
    name: "Ty3",
    age: 13,
  };
  enum GENDER {
    MALE = "MALE",
    FEMALE = "FEMALE",
  }
  interface Student {
    name: string;
    age: number;
    gender: GENDER; // is optional
    funcOptional?: () => void;
  }
  type StudentKeys = keyof Student;
  // tạo 1 interface mới từ interface Student (interface mới này có name và gender)
  type GetNameAndGenderInStudent = Pick<Student, "name" | "gender">;
  const objectStudentOnlyExistsNameAndGender: GetNameAndGenderInStudent = {
    name: "123",
    gender: GENDER.FEMALE,
  };
  console.log(objectStudentOnlyExistsNameAndGender);
  // ngược lại với Pick là Omit lấy all chỉ trừ ra name và gender
  type GetAge = Omit<Student, "name" | "gender">;
  const objectStudentOnlyHasAge: GetAge = {
    age: 123,
  };
  console.log(objectStudentOnlyHasAge);
  const keysStudent: StudentKeys = "age";
  enum API_STATUS {
    PENDING = 1,
    FULFILLED = 2,
    REJECTED = "3",
  }
  const studentInformationNotChange: Student = {
    name: "Tỷ",
    age: 12,
    gender: GENDER.FEMALE,
  } as const;
  const studentInformation: Student = {
    name: "Tỷ",
    age: 12,
    gender: GENDER.FEMALE,
  };
  // chức năng giống với as const
  const studentInformationReadOnly: Readonly<Student> = {
    name: "Tỷ",
    age: 12,
    gender: GENDER.FEMALE,
  };
  // console.log((studentInformationReadOnly.name = ""));
  interface CatInfo {
    age: number;
    breed: string;
  }
  type CatName = "miffy" | "boris" | "mordred";
  // tạo 1 object có keys nằm trong CatName và value là object CatInfo
  const objectCars: Record<CatName, CatInfo> = {
    miffy: {
      age: 12,
      breed: "AAA",
    },
    boris: {
      age: 15,
      breed: "BBB",
    },
    mordred: {
      age: 20,
      breed: "CCC",
    },
  };
  console.log(objectCars);
  const listStudent: Student[] = [
    {
      name: "Tỷ",
      age: 13,
      gender: GENDER.FEMALE,
    },
    {
      name: "Văn",
      age: 15,
      gender: GENDER.MALE,
    },
  ];

  const handleUpdateListStudent = (
    objectStudent: Student,
    updateAttributeStudent: Partial<Student>
  ) => {
    return { ...objectStudent, ...updateAttributeStudent };
  };
  console.log(
    handleUpdateListStudent(
      {
        name: "Văn",
        age: 15,
        gender: GENDER.MALE,
      },
      {
        age: 20,
      }
    )
  );
  const PENDING = API_STATUS.PENDING;
  const REJECTED = API_STATUS.REJECTED;
  const objectInformation: {
    name: string;
    age: number;
  } = {
    name: "Ty",
    age: 14,
  };
  const arrayStringAndNumberAndBoolean: [string, number, boolean] = [
    "a",
    1,
    false,
  ];
  const arrayString: string[] = ["a", "b", "c"];
  const arrayStringOrNumber: (string | number | boolean)[] = [
    "a",
    "b",
    "c",
    1,
    true,
  ];
  const makeDate = (): Date => new Date();
  const money: number = 10;
  const booleanValue: boolean = true;
  const name: string = "Nguyen Van Ty";
  const handleCaculatorAdd = (x: number, y: number): number => {
    return x + y;
  };
  const returnText = (text: string): void => console.log(text);
  return (
    <div className="App">
      <p>{`new Date: ${makeDate()}`}</p>
      <p>{`text: ${returnText("123")}`}</p>
      <p>{`Pending: ${PENDING}`}</p>
      <p>{`Rejected: ${REJECTED}`}</p>
      <p>{`string: ${name}`}</p>
      <p>{`boolean: ${booleanValue}`}</p>
      <p>{`number: ${money}`}</p>
      <p>{`caculator add: ${handleCaculatorAdd(1, 2)}`}</p>
      <p>Array string: {arrayString?.map((v) => v + ", ")}</p>
      <p>
        Array string and number:{" "}
        {arrayStringAndNumberAndBoolean?.map((v) => v + ", ")}
      </p>
      <p>
        Array student:
        {listStudent?.map(
          ({ name, age, gender }) =>
            ` name: ${name}, age: ${age}, gender: ${gender} - `
        )}
      </p>
      <p>Array string or number: {arrayStringOrNumber?.map((v) => v + ", ")}</p>
      <p>{`object information: name-${objectInformation?.name}, age-${objectInformation?.age}`}</p>
      <p>{`object information item: name-${objectInformationItem?.name}, age-${objectInformationItem?.age}`}</p>
      <p>{`object information product: name-${objectInformationProduct?.name}, age-${objectInformationProduct?.age}`}</p>
      <p>{`object student information: name-${studentInformation?.name}, age-${studentInformation?.age}`}</p>
      <p>{`object student information not change: name-${studentInformationNotChange?.name}, age-${studentInformationNotChange?.age}`}</p>
    </div>
  );
}

export default App;

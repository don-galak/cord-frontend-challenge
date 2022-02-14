import { Option } from "../common/option";

export class DiscoverState {
  keyword = "";
  year = 0;
  results = [];
  totalCount = 0;
  genreOptions: Option[] = [];
  ratingOptions: Option[] = [
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 },
  ];
  languageOptions: Option[] = [
    { id: "GR", name: "Greek" },
    { id: "EN", name: "English" },
    { id: "RU", name: "Russian" },
    { id: "PO", name: "Polish" },
  ];
}

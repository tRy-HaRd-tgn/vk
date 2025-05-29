import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { DataTable } from "../src/app/table/data-table";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import "@testing-library/jest-dom";

const mockColumns = [
  {
    accessorKey: "date",
    header: "Дата",
  },
  {
    accessorKey: "result",
    header: "Результат",
  },
];

describe("DataTable", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("должен отображать данные таблицы", async () => {
    const mockData = [
      { date: "2024-03-20", result: "2-0" },
      { date: "2024-03-21", result: "1-1" },
    ];

    mock
      .onGet("http://localhost:3000/matches?_start=0&_end=10")
      .reply(200, mockData);

    render(<DataTable columns={mockColumns} data={[]} />);

    await waitFor(() => {
      expect(screen.getByText("2024-03-20")).toBeInTheDocument();
      expect(screen.getByText("2-0")).toBeInTheDocument();
    });
  });

  it("должен фильтровать данные по результату", async () => {
    const mockData = [
      { date: "2024-03-20", result: "2-0" },
      { date: "2024-03-21", result: "1-1" },
    ];

    mock
      .onGet("http://localhost:3000/matches?_start=0&_end=10")
      .reply(200, mockData);

    render(<DataTable columns={mockColumns} data={[]} />);

    await waitFor(() => {
      expect(screen.getByText("2024-03-20")).toBeInTheDocument();
    });

    const filterInput = screen.getByPlaceholderText("Filter result...");
    fireEvent.change(filterInput, { target: { value: "2-0" } });

    await waitFor(() => {
      expect(screen.getByText("2-0")).toBeInTheDocument();
      expect(screen.queryByText("1-1")).not.toBeInTheDocument();
    });
  });

  it("должен обрабатывать пагинацию", async () => {
    const firstPageData = Array(10).fill({ date: "2024-03-20", result: "2-0" });
    const secondPageData = [{ date: "2024-03-21", result: "1-1" }];

    mock
      .onGet("http://localhost:3000/matches?_start=0&_end=10")
      .reply(200, firstPageData);
    mock
      .onGet("http://localhost:3000/matches?_start=10&_end=20")
      .reply(200, secondPageData);

    render(<DataTable columns={mockColumns} data={[]} />);

    await waitFor(() => {
      expect(screen.getAllByText("2024-03-20")).toHaveLength(10);
    });

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(screen.getByText("2024-03-21")).toBeInTheDocument();
    });
  });
});

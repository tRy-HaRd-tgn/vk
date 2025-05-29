import MatchService from "../src/service/matchService";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("MatchService", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("должен получать список матчей", async () => {
    const mockData = [
      {
        id: "id1748531544459",
        date: "43242342433",
        description: "12415125",
        result: "5235235",
        commands: ["5235", "124"],
        attendance: 1,
      },
    ];
    mock.onGet("/matches").reply(200, mockData);

    const response = await MatchService.matches();
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data[0]).toMatchObject({
      id: expect.any(String),
      date: expect.any(String),
      description: expect.any(String),
      result: expect.any(String),
      commands: expect.any(Array),
      attendance: expect.any(Number),
    });
  });

  it("должен получать один матч по id", async () => {
    const mockData = {
      id: "id1748531544459",
      date: "43242342433",
      description: "12415125",
      result: "5235235",
      commands: ["5235", "124"],
      attendance: 1,
    };
    mock.onGet("/matches/id1748531544459").reply(200, mockData);

    const response = await MatchService.match("id1748531544459");
    expect(response.data).toMatchObject({
      id: expect.any(String),
      date: expect.any(String),
      description: expect.any(String),
      result: expect.any(String),
      commands: expect.any(Array),
      attendance: expect.any(Number),
    });
  });

  it("должен создавать новый матч", async () => {
    const newMatch = {
      id: "id1748531544459",
      date: "43242342433",
      description: "12415125",
      result: "5235235",
      commands: ["5235", "124"],
      attendance: 1,
    };

    mock.onPost("/matches").reply(200, newMatch);

    const response = await MatchService.addMatch(
      newMatch.id,
      newMatch.date,
      newMatch.description,
      newMatch.result,
      newMatch.commands,
      newMatch.attendance
    );

    expect(response.data).toMatchObject({
      id: expect.any(String),
      date: expect.any(String),
      description: expect.any(String),
      result: expect.any(String),
      commands: expect.any(Array),
      attendance: expect.any(Number),
    });
  });

  it("должен обновлять существующий матч", async () => {
    const updatedMatch = {
      id: "id1748531544459",
      date: "43242342433",
      description: "12415125",
      result: "5235235",
      commands: ["5235", "124"],
      attendance: 1,
    };

    mock.onPut("/matches/id1748531544459").reply(200, updatedMatch);

    const response = await MatchService.replaceMatch(
      updatedMatch.id,
      updatedMatch.date,
      updatedMatch.description,
      updatedMatch.result,
      updatedMatch.commands,
      updatedMatch.attendance
    );

    expect(response.data).toMatchObject({
      id: expect.any(String),
      date: expect.any(String),
      description: expect.any(String),
      result: expect.any(String),
      commands: expect.any(Array),
      attendance: expect.any(Number),
    });
  });
});

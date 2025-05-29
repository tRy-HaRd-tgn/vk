import $api from "../http";
export default class MatchService {
  static async matches() {
    return $api.get("/matches");
  }
  static async match(id: string) {
    return $api.get(`/matches/${id}`);
  }
  static async addMatch(
    id: string,
    date: string,
    description: string,
    result: string,
    commands: string[],
    attendance: number
  ) {
    return $api.post(`/matches`, {
      id,
      date,
      description,
      result,
      commands,
      attendance,
    });
  }
  static async replaceMatch(
    id: string,
    date: string,
    description: string,
    result: string,
    commands: string[],
    attendance: number
  ) {
    return $api.put(`/matches/${id}`, {
      id,
      date,
      description,
      result,
      commands,
      attendance,
    });
  }
  static async deleteMatch(id: string) {
    $api.delete(`/matches/${id}`);
  }
}

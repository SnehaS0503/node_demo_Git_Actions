import { printMessage } from "./index";

test("printMessage logs the message", () => {
  const spy = jest.spyOn(console, "log").mockImplementation(() => {});
  printMessage();
  expect(spy).toHaveBeenCalledWith("Hiiiiiiiiiiii, GitHub Actions!");
  spy.mockRestore();
});

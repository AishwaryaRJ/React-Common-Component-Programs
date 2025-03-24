const validateResponse = (data) => {
    return data && typeof data.id === "number" && typeof data.name === "string";
  };


  import { validateResponse } from "./validation";

test("Validates API response correctly", () => {
  const validData = { id: 1, name: "Test" };
  const invalidData = { id: "1", title: "Test" };

  expect(validateResponse(validData)).toBe(true);
  expect(validateResponse(invalidData)).toBe(false);
});

//test API
global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: "mock data" }),
    })
  );
  
  test("fetches and displays data", async () => {
    const { findByText } = render(<YourComponent />);
    expect(await findByText("mock data")).toBeInTheDocument();
  });
  
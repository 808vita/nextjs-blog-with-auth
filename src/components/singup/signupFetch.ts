import { routerPush } from "@/util/routerPush";

export const signupUser = async (
  email: string,
  password: string,
  role: string
) => {
  try {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        role,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
      return { error: json.error };
    }
    if (response.ok) {
      console.log("oof", json);
      // signup success ?
      console.log("signup ?");
      routerPush("/login");
    }
  } catch (error) {
    console.log("error", error);
    return { error };
  }
};

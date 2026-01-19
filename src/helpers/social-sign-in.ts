import { authClient } from "@/lib/auth-client"; //import the auth client

export async function socialSignIn(provider: string) {
 try {
  const searchParams = new URLSearchParams(window.location.search);
  const nextParam = searchParams.get("next");
  const callbackURL = nextParam ? nextParam : "/dashboard";

  await authClient.signIn.social({
   /**
    * The social provider ID
    * @example "github", "google", "apple"
    */
   provider,
   /**
    * A URL to redirect after the user authenticates with the provider
    * @default "/"
    */
   callbackURL: callbackURL,
   /**
    * A URL to redirect if an error occurs during the sign in process
    */
   errorCallbackURL: "/error",
   /**
    * A URL to redirect if the user is newly registered
    */
   newUserCallbackURL: callbackURL,
   /**
    * disable the automatic redirect to the provider. 
    * @default false
    */
   disableRedirect: false,
  });
 } catch (error) {
  console.error(error);
 }
}
const baseUrl = "http://localhost:8000";

export const callMyServer = async function (
  endpoint,
  isPost = false,
  postData = null
) {
  const optionsObj = isPost ? { method: "POST" } : {};
  if (isPost && postData !== null) {
    optionsObj.headers = { "Content-type": "application/json" };
    optionsObj.body = JSON.stringify(postData);
  }
  const response = await fetch(`${baseUrl}${endpoint}`, optionsObj);
  if (response.status === 500) {
    await handleServerError(response);
    return;
  }
  const data = await response.json();
  console.log(`Result from calling ${endpoint}: ${JSON.stringify(data)}`);
  return data;
};

export const showOutput = function (textToShow) {
  if (textToShow == null) return;
  console.log(textToShow);
};

const handleServerError = async function (responseObject) {
  const error = await responseObject.json();
  console.error("I received an error ", error);
  if (error.hasOwnProperty("error_message")) {
    showOutput(`Error: ${error.error_message} -- See console for more`);
  }
};

import Button from "@/components/button";
async function getData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  return data;
}

const page = async () => {
  let data = await getData();
  //   console.log("datas", data);

  return (
    <div>
      {data.map((el) => (
        <div
          style={{ border: "1px solid black", margin: "1rem", padding: "1rem" }}
          key={el.id}
        >
          <h1>{el.id}</h1>
          <h2>{el.title}</h2>
          <h5>{el.body}</h5>
          <Button userId={el.userId} />
        </div>
      ))}
    </div>
  );
};

export default page;

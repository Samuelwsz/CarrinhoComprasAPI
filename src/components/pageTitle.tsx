export default function PageTitle({ data }: { data: string }) {
  return (
    <>
      <div className="flex justify-center my-10 text-3xl">
        {data || `{insira um título}`}
      </div>
    </>
  )
}

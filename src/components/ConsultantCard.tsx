import Link from "next/link";

export default function ConsultantCard({ consultant }: { consultant: any }) {
  return (
    <div className="card flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{consultant.user.name}</h3>
          <span className="badge">₹{(consultant.pricePerMin/100).toFixed(2)}/min</span>
        </div>
        <div className="text-sm text-muted">{consultant.title}</div>
        <p className="text-muted mt-2 line-clamp-3">{consultant.bio}</p>
        <div className="mt-3 flex gap-2 flex-wrap">
          {consultant.skills.split(",").slice(0,6).map((s: string) => <span key={s} className="badge">{s.trim()}</span>)}
        </div>
      </div>
      <div className="mt-4">
        <Link href={`/consultants/${consultant.id}`} className="btn">View & Book</Link>
      </div>
    </div>
  )
}

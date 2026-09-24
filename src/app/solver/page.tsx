import { prisma } from "@/lib/prisma";
import SolverClient from "./SolverClient";

export default async function SolverPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams;
  const problemId = resolvedSearchParams.problemId as string | undefined;

  let initialProblem = null;
  
  if (problemId) {
    initialProblem = await prisma.problem.findUnique({
      where: { id: problemId }
    });
  }

  // If no specific ID, maybe we load the first problem by default, or just empty
  if (!initialProblem && !problemId) {
    const firstProblem = await prisma.problem.findFirst();
    if (firstProblem) initialProblem = firstProblem;
  }

  return <SolverClient initialProblem={initialProblem} />;
}

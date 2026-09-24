export const mockDb = {
  problems: [
    {
      id: "prob_1",
      title: "Two Sum",
      difficulty: "Easy",
      topic: "Array, Hash Table",
      description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
      starterCode: "function twoSum(nums, target) {\n  \n}",
    },
    {
      id: "merge-intervals",
      title: "Merge Intervals",
      difficulty: "Medium",
      topic: "Array, Sorting",
      description: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
      starterCode: "function merge(intervals) {\n  \n}",
    },
    {
      id: "prob_3",
      title: "Valid Parentheses",
      difficulty: "Easy",
      topic: "String, Stack",
      description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      starterCode: "function isValid(s) {\n  \n}",
    },
    {
      id: "prob_4",
      title: "Longest Palindromic Substring",
      difficulty: "Medium",
      topic: "String, Dynamic Programming",
      description: "Given a string s, return the longest palindromic substring in s.",
      starterCode: "function longestPalindrome(s) {\n  \n}",
    },
    {
      id: "prob_5",
      title: "Median of Two Sorted Arrays",
      difficulty: "Hard",
      topic: "Array, Binary Search",
      description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
      starterCode: "function findMedianSortedArrays(nums1, nums2) {\n  \n}",
    }
  ]
};

// Simulated Prisma Client Interface
export const prisma = {
  problem: {
    findMany: async (args?: any) => {
      return mockDb.problems;
    },
    findUnique: async ({ where }: { where: { id: string } }) => {
      return mockDb.problems.find(p => p.id === where.id) || null;
    },
    findFirst: async () => {
      return mockDb.problems[0];
    }
  }
};

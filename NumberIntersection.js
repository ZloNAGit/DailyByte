// Given two integer arrays, return their intersection.
// Note: the intersection is the set of elements that are common to both arrays.
// EXAMPLES:
// nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
// nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
// nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []

const numberIntersection = (nums1, nums2) => {
  // Filter values shared between both arrays. Filter duplicates with Set and convert back to an array
  return [...new Set(nums1.filter(value => nums2.includes(value)))]
}
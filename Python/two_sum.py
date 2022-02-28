# Given an array of integers, return whether or not two numbers sum to a given target, k.
# Note: you may not sum a number with itself.
# EXAMPLES:
# [1, 3, 8, 2], k = 10, return true (8 + 2)
# [3, 9, 13, 7], k = 8, return false
# [4, 2, 6, 5, 2], k = 4, return true (2 + 2)

def two_sum(nums, target):
    for i in nums:
        for j in nums[i:]:
            if (i + j == target):
                return True
    return False

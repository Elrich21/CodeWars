def count_positives_sum_negatives(arr):
    if not arr:
        return []
    
    count_positives = sum(1 for x in arr if x > 0)
    sum_negatives = sum(x for x in arr if x < 0)
    
    return [count_positives, sum_negatives]

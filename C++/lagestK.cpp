 #include <iostream>

solution(const vector<int>& input){
    unordered_set<int> s(input.begin(),input.end());
    int max_value = 0;
    for(auto n : s){
        if((abs(n) > max_value) && (s.count(-n) != 0)) {
            max_value = n;
        }
    }
    return max_value;
}
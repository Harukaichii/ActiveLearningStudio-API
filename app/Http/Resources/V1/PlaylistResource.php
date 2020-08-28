<?php

namespace App\Http\Resources\V1;

use App\Http\Resources\V1\ActivityResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PlaylistResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'order' => $this->order,
            'activities' => ActivityResource::collection($this->activities->sortBy('order')),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
